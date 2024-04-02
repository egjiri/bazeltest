import _ from "lodash-es";
import numbers from "../numbers";

export function shouldBe42() {
	let a = [...numbers];
	if (true) {
		a.push(0);
	}
	return _.sum(a);
}
