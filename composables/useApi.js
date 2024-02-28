export const useApi = (path, options = {}) => {
    const config = useRuntimeConfig().public.baseURL;
    const { locale } = useI18n();
    path = `${config}${path}`;
    options.headers = {
        Accept: "application/json",
        "Accept-Language": locale.value,
    };

    return useFetch(path, options);
};
