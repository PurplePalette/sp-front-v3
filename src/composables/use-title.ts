export default function (pageTitle: string) {
    const config = useRuntimeConfig()
    useHead({ title: `${pageTitle} | ${config.SITE_NAME}` });
}