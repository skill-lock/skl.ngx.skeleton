import { Injectable } from "@angular/core";

@Injectable()
export class SkeletonService {

	log(logType: string, message: string, data?: any) {
		if (data) {
			return (<any>console)[logType](message, data);
		}

		(<any>console)[logType](message);
	}

}
