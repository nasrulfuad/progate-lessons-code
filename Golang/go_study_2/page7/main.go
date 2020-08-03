package main

import "fmt"
// Import the math/rand package
import "math/rand"

func main() {
    
    for i := 1; i <= 5; i++ {
        // Generate and print a random integer from 0 to 9
        fmt.Println(rand.Intn(10))
        fmt.Println(rand.Intn(10))
    }
}
