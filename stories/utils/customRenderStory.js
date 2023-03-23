export default (component, javascript, timeout) => {
    if (javascript !== undefined) setTimeout(() => eval(javascript), timeout)
    return component;
}