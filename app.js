/*
const UIController = ( function (){
    let text = 'Hello World'

    const changeText = function(){
        const element = document.querySelector('h1')
        element.textContent = text
    }
    return {
        callChangeText: function(){
            changeText()
            console.log(text)
        }

    }
})();

UIController.callChangeText()

const ItemController = ( function(){
    let data = []
    function  add(item){
        data.push(item)
        console.log('Item is added')
    }
    function get(id){
        return data.find(item => {
            return item.id === id
        })
    }
    return {
        add: add,
        get: get
    }
})();

ItemController.add ({id: 1, name: 'Kate'})
console.log(ItemController.get(1))
 */


const ItemCtrl = (function(){
    // item constructor
    const Item = function(id, name, calories){
        this.id = id
        this.name = name
        this.calories = calories
    }



// Data structure
const data = {
    items: [
        {id:0, name: 'Steak Dinner' , calories: 1200},
        {id:1, name: 'Cookie', calories: 400},
        {id:2, name: 'Eggs', calories: 300}
    ],
    total: 0
}

return{
        getItem: function (){
            return data.items
        },
        logData: function (){
            return data
        }
}

})();
const UICtrl = (function(){
        return {
            populateItemList: function(item){
                // create html content
                let html = '';
                // parse data and create list items html
                item.forEach(function (item){
                    html += `<li class="collection-item" id="item-${item.id}">
                        <strong>${item.name}:</strong> <em>${item.calories} Calories</em>
                        <a href="#" class="secondary-content">
                            <i class="edit-item fa fa-pencil"></i>
                        </a>
                    </li>`;
                })
                // insert list items
                document.querySelector("#item-list").innerHTML = html;
            }
        }
})();



// App Controller
const App= (function  (ItemCtrl,  UICtrl){
    return {
        init: function(){
            console.log('Initializing App')
            // fetch items from data structure
            const items = ItemCtrl.getItem()
            // populate items list
            UICtrl.populateItemList(items)
        }
    }
}) (ItemCtrl, UICtrl);

// Initialize App
App.init()