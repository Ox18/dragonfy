import { StatusCodes} from "http-status-codes"

export type HttpResponse = {
    status: StatusCodes,
    body: any;
}