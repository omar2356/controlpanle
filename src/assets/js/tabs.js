(function() {
       const tabs = document.querySelectorAll(".js-tabs")
       Array.from(tabs, tab => {
             const tabsLinks=  tab.querySelectorAll(".js-tab__link")
              let currentActiveTab = tab.querySelector(".js-tab__link.is-active")

              const toggleTab = (toggleTapLink= currentActiveTab) => {
                     currentActiveTab = toggleTapLink || currentActiveTab
                     toggleTapLink.classList.toggle("is-active")

                     const toggledTabData = toggleTapLink.dataset.index;
                     const toggledTabAree = tab.querySelector(`.js-tabarea[data-index=${toggledTabData}]`)
                     toggledTabAree.classList.toggle("is-active")
              }

              if(!currentActiveTab){
                     toggleTab(tabsLinks[0])
              }

              tabsLinks.forEach(tabsLink => {
                     tabsLink.addEventListener("click", function(event){
                            if(currentActiveTab === this){
                                   return
                            }
                            if(currentActiveTab){
                             toggleTab()
                            }
                            toggleTab(this)
                     })
              })
       })
})()