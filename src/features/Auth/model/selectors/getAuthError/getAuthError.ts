import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";

export const getAuthError = (state: StateSchema) => state?.regForm?.error || ""
