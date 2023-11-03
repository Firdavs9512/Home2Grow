package main

import (
	"fmt"
	"os/user"
	"runtime"
)

func main() {
	// getSystem()
	getLinuxUserDerectory()
}

func getSystem() {
	os := runtime.GOOS
	fmt.Println("__________ System __________")
	fmt.Printf("OS: %s\n", os) // linux, darwin, windows
}

func getLinuxUserDerectory() {
	user, err := user.Current()
	if err != nil {
		panic(err)
	}

	homeDir := user.HomeDir
	fmt.Printf("Home Directory: %s\n", homeDir) // Example: /home/whoami
}
