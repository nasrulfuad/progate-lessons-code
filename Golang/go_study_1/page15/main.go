package main

func main() {
    money := 200
    price := 200
    
    // Add an else-if and else statement below
    if money > price {
        println("You can buy this item")
    } else if money == price {
        println("You can buy this item, but won't have any money left")
    } else {
        println("You don't have enough money")
    }

}
