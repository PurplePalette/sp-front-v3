import {
    onBeforeRouteLeave, onBeforeRouteUpdate, NavigationGuardNext
} from 'vue-router'

const confirmText = "入力内容は破棄されます、本当に移動してもよろしいですか?"

const confirmVueRouter = (next: NavigationGuardNext ) => {
    const answer = window.confirm(confirmText)
    if (answer) {
        // ページを移動したら、確認ダイアログを表示しないように
        window.removeEventListener("beforeunload", confirmBrowserRouter)
        next()
    }
}
const confirmBrowserRouter = (e: BeforeUnloadEvent) => {
    e.preventDefault()
    e.returnValue = confirmText
}

export default function () {
    // Vue-routerでのページ移動時の確認ダイアログ発火
    onBeforeRouteLeave((_to, _from, next) => {
        confirmVueRouter(next)
    })
    onBeforeRouteUpdate((_to, _from, next) => {
        confirmVueRouter(next)
    })
    // ページリロード時の確認ダイアログ発火
    if (process.client) {
        window.addEventListener("beforeunload", confirmBrowserRouter)
    }
}