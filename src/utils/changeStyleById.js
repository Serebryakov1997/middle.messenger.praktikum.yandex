export function viewAvatarBlock(elemId, styleAttr, setValue) {
    const elem = document.getElementById(elemId);
    console.log('elem: ', elem);
    if (elem !== null) {
        console.log('style: ', document.getElementById(elemId).style.styleAttr);
        document.getElementById(elemId).style.styleAttr = setValue;
    } else {
        return null;
    }
};
