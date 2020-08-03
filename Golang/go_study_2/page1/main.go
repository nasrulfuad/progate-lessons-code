package main 

import "fmt"
import "math/rand"
import "time"

func main() {
    rand.Seed(time.Now().Unix())
    
    for i := 1; i <= 3; i++ {
        fmt.Printf("Fortune number %d:", i)
        
        number := rand.Intn(6)
        switch number {
            case 0:
                fmt.Println("Unlucky")
            case 1, 2:
                fmt.Println("A little lucky")
            case 3, 4:
                fmt.Println("Lucky")
            case 5:
                fmt.Println("Very lucky")
        }
    }
}