import (
	"slices"
)

func isAnagram(s string, t string) bool {
	x := []rune(s) // string -> []byte
	y := []rune(t) // string -> []byte
	slices.Sort(x) // sort in place
	slices.Sort(y) // sort in place
	result := string(x) // []rune -> string
	result2:= string(y) // []rune -> string
	fmt.Println(result, result2)
	return result == result2
}
