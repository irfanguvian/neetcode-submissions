import (
	"slices"
)

func isAnagram(s string, t string) bool {
	x := []byte(s) // string -> []byte
	y := []byte(t) // string -> []byte
	slices.Sort(x) // sort in place
	slices.Sort(y) // sort in place
	result := string(x) // []byte -> string
	result2:= string(y) // []byte -> string
	fmt.Println(result, result2)
	return result == result2
}
