package main

func main() {
    x := 20
    // When x is greater or equal to 10 and less than or equal 30,
    // print the message "x is at least 10 and at most 30"
    if x >= 10 && x <= 30 {
        println("x is at least 10 and at most 30")
    }
    
    y := 60
    // When y is less than 10 or greater than 30,
    // print the message "y is less than 10 or greater than 30"
    if y < 10 || y > 30 {
        println("y is less than 10 or greater than 30")
    }

    z := 55
    // When z is not equal to 77,
    // print the message "z is not equal to 77"
    if z != 77 {
        println("z is not equal to 77")
    }

}
