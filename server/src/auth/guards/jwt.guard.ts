import { AuthGuard } from "@nestjs/passport";
import { ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";



export class JwtAuthGuard extends AuthGuard("jwt") {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        // Call the default canActivate method from AuthGuard
        console.log('JwtAuthGuard: canActivate called');
        return super.canActivate(context);
    }
}