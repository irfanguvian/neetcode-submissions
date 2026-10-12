func isAnagram(s string, t string) bool {
	sObject := make(map[string]int)
	tObject := make(map[string]int)

	runeS := []rune(s)
	runeT := []rune(t)

	for _,v := range runeS {
		if _,ok := sObject[string(v)]; ok {
			sObject[string(v)] += 1
		} else {
			sObject[string(v)] = 1
		}
	}
	

	for _,v := range runeT {
		if _,ok := sObject[string(v)]; !ok {
			return false
		}

		if _,ok := tObject[string(v)]; ok {
			tObject[string(v)] += 1
		} else {
			tObject[string(v)] = 1
		}
	}

	keys := make([]string, 0 , len(sObject))

	for k,_ := range sObject {
		keys = append(keys, k)
	}

	for _,k := range keys {
		if(sObject[k] != tObject[k]) {
			return false
		}
	}

	return true
}
