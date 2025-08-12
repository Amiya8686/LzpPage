import {reactive,ref} from "./vue.esm-browser.js"
const contentModule={
    setup(){
        let control = reactive({
            isShowMenus:false
        });
        let content = reactive({
            name:"李梓鹏",
            university:"广东交通大学",
            avatar:"./sources/images/Lzp.png",
            location:"中国·广东"
        })
        let content_en = reactive({
            name:"ZiPeng-Li",
            university:"Guangdong-Communication-University",
            avatar:"./sources/images/Lzp.png",
            location:"GuangDong"
        })
        

        const handleMenus=()=>{
            control.isShowMenus=!control.isShowMenus;
        }

        return {control,content,content_en,handleMenus};
    }
}
export {contentModule} ;