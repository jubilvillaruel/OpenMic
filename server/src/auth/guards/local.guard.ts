import { AuthGuard } from "@nestjs/passport";
import {ExecutionContext ,Injectable } from "@nestjs/common";
import { Observable } from "rxjs";



@Injectable()
export class LocalAuthGuard extends AuthGuard("local") {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        // Call the default canActivate method from AuthGuard
        return super.canActivate(context);
    }
}
