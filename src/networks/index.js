import axios from "axios";
import { endPoints } from "./endPoints";
import { requestInterceptor, responseInterceptor, requestErrorInterceptor, responseErrorInterceptor } from "./interceptors";
import { REQUEST_TYPE } from "./utils";
import { LoaderConfig } from "../components/AppLoader";

const TIMEOUT_DURATION_IN_MILLIS = 60000;

export const defaultInstance = axios.create({
    baseURL: endPoints.base_url,
    timeout: TIMEOUT_DURATION_IN_MILLIS,
});

defaultInstance.interceptors.request.use(requestInterceptor, requestErrorInterceptor);

defaultInstance.interceptors.response.use(responseInterceptor, responseErrorInterceptor);

export const requestApi = ({
    url,
    path = "",
    params = null,
    data = null,
    apiRequestType,
    disableLoader,
    disableToast,
}) => {
    const formedUrl = `${url}${path || ""}`
    let promise = null;
    let wrapperPromise;
    switch (apiRequestType) {
        case REQUEST_TYPE.GET:
            promise = defaultInstance.get(formedUrl, { params: params });
            break;
        case REQUEST_TYPE.POST:
            promise = defaultInstance.post(formedUrl, data, { params: params });
            break;
        case REQUEST_TYPE.PATCH:
            promise = defaultInstance.patch(formedUrl, data, { params: params });
            break;
        case REQUEST_TYPE.DELETE:
            promise = defaultInstance.delete(formedUrl, { data: data, params: params });
            break;
        case REQUEST_TYPE.PUT:
            promise = defaultInstance.put(formedUrl, { data: data, params: params });
            break;
    }

    if (promise) {
        /**
         * We can check here to know global lodar and toast are needed by api request
         */
        wrapperPromise = new Promise((res, rej) => {
            if (!disableLoader) {
                LoaderConfig.updateCounter(LoaderConfig.getValue() + 1);
                LoaderConfig.loaderRef?.setVisibilityLoader(true);
            }
            promise.then((resData) => {
                // console.log("resData:- ", resData);
                if (!disableLoader) {
                    if (LoaderConfig.getValue() >= 1)
                        LoaderConfig.updateCounter(LoaderConfig.getValue() - 1);
                    LoaderConfig.loaderRef?.setVisibilityLoader(false);
                }
                res(resData);
            }).catch((rejData) => {
                if (!disableLoader) {
                    if (LoaderConfig.getValue() >= 1)
                        LoaderConfig.updateCounter(LoaderConfig.getValue() - 1);
                    LoaderConfig.loaderRef?.setVisibilityLoader(false);
                }
                rej(rejData);
            })
        });
    } else {
        wrapperPromise = Promise.resolve();
    }
    return wrapperPromise;
}




