<template>
    <div id="openModal" class="modal">
        <div class="modal-dialog">
        <div class="modal-content">

        <div class="modal-header">
            <h3 class="modal-title">Change task</h3>
            <button  type="button" value="Close" @click="$emit('close')" class="btn btn-danger"  >Close</button>
        
            </div>
           
                  <input type="text" v-model=this.changed_task placeholder="Введите текст новой задачи">
                  <label class="form-label" v-if = is_refactored_task_exist :style="{ 'color' : 'red'}">Такая задача уже существует</label>
                  <button 
                  :class = "{ 'disabled' : !changed_task }"
                  class="btn btn-primary" type="button" 
                  text=""
                  @click="$emit('get_refactor_task',this.changed_task)" >Refactor</button>

  
                


            
        </div>
        </div>
    </div>
</template>


<script>
export  default{
    name: "ModalWindowRefactor",
  
    data: function () {
        return {
            changed_task : "",
        }   
    },
    emits : [ 'close', 'get_refactor_task'],
    props : {
        is_refactored_task_exist : {
            type : Boolean
        }
    },
    methods : {
        change_task(){
            this.$emit('change_task',this.changed_task)
        }

    }

}


</script>


<style> 
#p_alert{
    color: red;
}
.modal {

    position: relative; /* фиксированное положение */
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.5); /* фон */
    z-index: 1050;
    opacity: 1; /* по умолчанию модальное окно прозрачно */
    -webkit-transition: opacity 200ms ease-in; 
    -moz-transition: opacity 200ms ease-in;
    transition: opacity 200ms ease-in; /* анимация перехода */
    pointer-events: auto; /* элемент невидим для событий мыши */
    margin: 0;
    padding: 0;
}
/* При отображении модального окно */
.modal:target {
    opacity: 1; /* делаем окно видимым */
	pointer-events: auto; /* элемент видим для событий мыши */
    overflow-y: auto; /* добавляем прокрутку по y, когда элемент не помещается на страницу */
}
/* ширина модального окна и его отступы от экрана */
.modal-dialog {
    position: relative;
    width: auto;
    margin: 10px;
}
@media (min-width: 576px) {
.modal-dialog {
    max-width: 500px;
    margin: 30px auto; /* отображение окна по центру */
}
}
/* Стили для блока с контентом окна */ 
.modal-content {
    position: relative;

    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3rem;
    outline: 0;
}
@media (min-width: 768px) {
  .modal-content {
      -webkit-box-shadow: 0 5px 15px rgba(0,0,0,.5);
      box-shadow: 0 5px 15px rgba(0,0,0,.5);
  }
}
/* Стили заголовка окна */
.modal-header {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid #eceeef;
}
.modal-title {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1.5;
    font-size: 1.25rem;
    font-weight: 500;
}
/* Стили кнопки "х" ("Закрыть")  */
.close {
    width: 150 px; 
    height: 50 px;
    float: right;
    font-family: sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: 1;
    text-decoration: none;
}
/* Стили для закрывающей кнопки в фокусе или наведении */
.close:focus, .close:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    opacity: .75;
}
/* Стили блока основного содержимого окна */
.modal-body {
  position: relative;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 15px;
    overflow: auto;
}

#input_code_for_delete_ticker input{
    color: red;
}
</style>