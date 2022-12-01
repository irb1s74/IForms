import {Suspense} from 'react';
import {Stack} from "@mui/material";
import {Loader} from "shared/ui/Loader/Loader";
import {AuthForm} from "features/Auth";


const AuthPage = () => {
    return (
        <Stack sx={{height: "100%"}} justifyContent="center" alignItems="center">
            <Suspense fallback={<Loader/>}>
                <AuthForm/>
            </Suspense>
        </Stack>
    );
};

export default AuthPage;