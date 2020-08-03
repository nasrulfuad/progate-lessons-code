package main

func main() {
    n := 3
    switch n {
        // Add a case to print "Unlucky" when n is 0
        case 0:
            println("Unlucky")
        
        // Add a case to print "A little lucky" when n is 1 or 2
        case 1, 2:
            println("A little lucky")
        
        // Add a case to print "Lucky" when n is 3 or 4
        case 3, 4:
            println("Lucky")
        
        // Add a case to print "Very lucky" when n is 5
        case 5:
            println("Very lucky")
        
    }
}
