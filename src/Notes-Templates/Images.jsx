
export default function Images({url,size,previewSize = `80rem`}) {     

     document.querySelectorAll(".image")
    function preview(e){
        let container = document.createElement("div")
        let body = document.getElementsByTagName("body")[0]
        let target = e.target.parentElement
        let img = e.target
        let image_div = document.createElement("div")
        image_div.append(img) 
        
        container.style.position = "fixed"
        container.style.display = "flex"
        container.style.justifyContent = "center"
        container.style.alignItems = "center"
        container.style.top = "0"
        container.style.left = "0"
        container.style.width = "100vw";
        container.style.height = "100vh"
        container.style.background = "rgb(0,0,0,0.5)"
        image_div.style.width = previewSize;
        body.appendChild(container)
            
      
        container.append(image_div)
        img.addEventListener("click",()=>{
          target.append(img)
          container.remove()
        })
    }

  return (
    <div style={{ width:`${size}`}}>
      <img className="cursor-pointer rounded-lg" onClick={(e)=>{preview(e)}} src={url} alt="img" width="100%" />
      </div>

  )
}
