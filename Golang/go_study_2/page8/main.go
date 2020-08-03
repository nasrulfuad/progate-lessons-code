package main

import "fmt"
import "math/rand"
// Import the time package
import "time"

func main() {
    // Seed the random number generator
    rand.Seed(time.Now().Unix())
    
    for i := 1; i <= 5; i++ {
        fmt.Println(rand.Intn(10))
    }
}
