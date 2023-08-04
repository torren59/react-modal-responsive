import { RouteObject, redirect} from "react-router-dom";
import LogIn from "../pages/LogIn";
import React from "react";
import { Vitrina } from "../pages/Vitrina";

export class reactModalRoutes {

    private login: RouteObject = {
        path: '/',
        element: <LogIn />,
        action: this.accederSistema
    }

    private productos: RouteObject = {
        path: '/productos',
        element: <Vitrina />
    }

    private accederSistema(){
        /** En un modelo funcional de autenticación se validarían las credenciales y posteriormente se enviaría 
        * la solicitud al backend*/
        return redirect('/productos');
    }

    public traerRutas(): RouteObject[] {
        return [this.login, this.productos];
    }



}

