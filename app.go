package main

import (
	"context"
	"fmt"
	"math/rand"

	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/container"
	"github.com/docker/docker/client"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// ApplicationMenu returns the menu for the application
func (a *App) ApplicationMenu() {
	//
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

// Start ubuntu 22.04 container with docker: example
func (a *App) StartUbuntuContainer() map[string]string {
	// docker run -it ubuntu:22.04 bash
	cli, err := client.NewClientWithOpts(client.FromEnv)
	if err != nil {
		return map[string]string{
			"status":  "error",
			"message": err.Error(),
		}
	}

	reader, err := cli.ImagePull(context.Background(), "ubuntu:22.04", types.ImagePullOptions{})
	if err != nil {
		return map[string]string{
			"status":  "error",
			"message": err.Error(),
		}
	}

	defer reader.Close()

	buf := make([]byte, 1024)
	for {
		_, err := reader.Read(buf)
		if err != nil {
			break
		}
	}

	containerConfig := &container.Config{
		Image: "ubuntu:22.04",
		Tty:   true,
		Cmd:   []string{"bash"},
	}

	hostConfig := &container.HostConfig{
		NetworkMode: "host",
	}

	containerName := fmt.Sprintf("ubuntu-%d", rand.Intn(1000))

	container, err := cli.ContainerCreate(context.Background(), containerConfig, hostConfig, nil, nil, containerName)
	if err != nil {
		return map[string]string{
			"status":  "error",
			"message": err.Error(),
		}
	}

	err = cli.ContainerStart(context.Background(), container.ID, types.ContainerStartOptions{})
	if err != nil {
		return map[string]string{
			"status":  "error",
			"message": err.Error(),
		}
	}

	return map[string]string{
		"status":  "success",
		"message": containerName,
	}
}

// Return object with two strings
func (a *App) ExampleApp() map[string]string {
	return map[string]string{
		"first":  "first string",
		"second": "second string",
	}
}
