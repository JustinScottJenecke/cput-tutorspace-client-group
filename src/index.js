import tabFunctionality from "./js/tabFunction.js";

tabFunctionality();

/*
const deviceTable = document.querySelector('#tableBody')

    fetch('http://localhost:8080/ts/api/v1/post')
        .then(result => {
            console.log(result);
        });
*/    
//------------------------------------------------------

 /*   function populateDeviceTable() {

        const request = new XMLHttpRequest()

        request.open('get','http://localhost:8080/ts/api/v1/post/all')

        request.onload = () => {
            const data = JSON.parse(request.response)
            /*data.forEach(dataElement => {
                console.log(dataElement)
            })*//*
            data.forEach(datas => {
    
                let row  = `<tr>
                                <td>${datas.studentNo}</td>
                                <td>${datas.firstName}</td>
                                <td>${datas.lastName}</td>
                                <td>${datas.email}</td>
                                <td>${datas.institution}</td> 
                                <td>${datas.major}</td>     
                                <td>${datas.subject}</td>                 
                            </tr>`
        
                deviceTable.innerHTML += row
        
            })
            
        }
        request.send()
    
    }*/
