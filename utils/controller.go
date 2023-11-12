package main

import (
	"context"
	"fmt"

	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/container"
	"github.com/docker/docker/client"
)

// func main() {
// 	fmt.Println("__________ Docker Client __________")

// 	cli, err := client.NewClientWithOpts(client.FromEnv)
// 	if err != nil {
// 		panic(err)
// 	}

// 	containerShell(cli)
// }

func ContainerList(cli *client.Client) {
	containers, err := cli.ContainerList(context.Background(), types.ContainerListOptions{})
	if err != nil {
		panic(err)
	}

	for _, container := range containers {
		fmt.Printf("Container ID: %s\n", container.ID)
		fmt.Printf("Container Name: %s\n", container.Names[0])
	}
}

func ImageList(cli *client.Client) {
	images, err := cli.ImageList(context.Background(), types.ImageListOptions{})
	if err != nil {
		panic(err)
	}

	for _, image := range images {
		fmt.Printf("Image ID: %s\n", image.ID)
		fmt.Printf("Image RepoTags: %s\n", image.RepoTags[0])
	}
}

func ImagePull(cli *client.Client, imageName string) {
	reader, err := cli.ImagePull(context.Background(), imageName, types.ImagePullOptions{})
	if err != nil {
		panic(err)
	}

	defer reader.Close()

	buf := make([]byte, 1024)
	for {
		_, err := reader.Read(buf)
		if err != nil {
			break
		}
		fmt.Println(string(buf))
	}
}

func ContainerCreate(cli *client.Client) {
	containerConfig := &container.Config{
		Image: "alpine:3.16.3",
	}

	hostConfig := &container.HostConfig{}

	container, err := cli.ContainerCreate(context.Background(), containerConfig, hostConfig, nil, nil, "nginx-test")
	if err != nil {
		panic(err)
	}

	err = cli.ContainerStart(context.Background(), container.ID, types.ContainerStartOptions{})
	if err != nil {
		panic(err)
	}
}

func ContainerStart(cli *client.Client) {
	err := cli.ContainerStart(context.Background(), "nginx-test", types.ContainerStartOptions{})
	if err != nil {
		panic(err)
	}
}

func ContainerStop(cli *client.Client) {
	err := cli.ContainerStop(context.Background(), "nginx-test", container.StopOptions{})
	if err != nil {
		panic(err)
	}
}

func ContainerRemove(cli *client.Client) {
	err := cli.ContainerRemove(context.Background(), "nginx-test", types.ContainerRemoveOptions{})
	if err != nil {
		panic(err)
	}
}

func ContainerLogs(cli *client.Client) {
	reader, err := cli.ContainerLogs(context.Background(), "nginx-test", types.ContainerLogsOptions{
		ShowStdout: true,
		ShowStderr: true,
		Follow:     true,
	})

	if err != nil {
		panic(err)
	}

	defer reader.Close()

	buf := make([]byte, 1024)
	for {
		_, err := reader.Read(buf)
		if err != nil {
			break
		}
		fmt.Println(string(buf))
	}
}

func ImageRemove(cli *client.Client) {
	_, err := cli.ImageRemove(context.Background(), "alpine:latest", types.ImageRemoveOptions{})
	if err != nil {
		panic(err)
	}
}

func ContainerInspect(cli *client.Client) {
	container, err := cli.ContainerInspect(context.Background(), "nginx-test")
	if err != nil {
		panic(err)
	}

	fmt.Printf("Container ID: %s\n", container.ID)
	fmt.Printf("Container Name: %s\n", container.Name)
	fmt.Printf("Container Image: %s\n", container.Config.Image)
	fmt.Printf("Container State: %s\n", container.State.Status)
}

func ContainerExec(cli *client.Client) {
	execConfig := types.ExecConfig{
		AttachStdout: true,
		AttachStderr: true,
		Cmd:          []string{"ls", "-l"},
	}

	resp, err := cli.ContainerExecCreate(context.Background(), "zealous_elgamal", execConfig)
	if err != nil {
		panic(err)
	}

	err = cli.ContainerExecStart(context.Background(), resp.ID, types.ExecStartCheck{})
	if err != nil {
		panic(err)
	}

	fmt.Printf("Exec ID: %s\n", resp.ID)
}

// Real time shell in container
func ContainerShell(cli *client.Client) {
	execConfig := types.ExecConfig{
		AttachStdout: true,
		AttachStderr: true,
		Cmd:          []string{"sh"},
		Tty:          true,
	}

	resp, err := cli.ContainerExecCreate(context.Background(), "zealous_elgamal", execConfig)
	if err != nil {
		panic(err)
	}

	err = cli.ContainerExecStart(context.Background(), resp.ID, types.ExecStartCheck{
		Tty: true,
	})
	if err != nil {
		panic(err)
	}

	fmt.Printf("Exec ID: %s\n", resp.ID)
}
