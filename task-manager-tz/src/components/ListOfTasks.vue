<template>


    <section class="vh-100" style="background-color: #eee;">
       <modal-window-refactor 
       :style="{ 'display' : 'flex'}" 
       v-if=is_open_modal_window_for_ref_task
       @close=close_modal_window_refactor 
       @get_refactor_task=change_task >
      </modal-window-refactor> 
  <div class="container py-5 h-100">
    
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-7">
        <div class="card rounded-3">
          <div class="card-body p-4">

            <h4 class="text-center my-3 pb-3">To Do App</h4>

            <form class="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
              <div class="col-12">
                <div class="form-outline">
                  <input  placeholder="Добавьте свою задачу" type="text" v-model=this.name_of_new_task  id="form1" class="form-control" />
                  
                  <label class="form-label"  v-if = !is_task_exist for="form1">Enter a task here</label>
                  <label class="form-label" v-if = is_task_exist :style="{ 'color' : 'red'}">Такая задача уже существует</label>
                </div>
              </div>

              <div class="col-12">
                <button type="submit"  @click=add_new_task(name_of_new_task) class="btn btn-primary">Save</button>
              </div>

              <div class="col-12">
                <button type="submit" class="btn btn-warning">Get tasks</button>
              </div>
            </form>

            <table class="table mb-4">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Todo item</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
             
                    <tr  v-for="task in this.tasks" :key="task.number">
                    
                            <new-task 
                            :task=task
                            @task_is_done = mark_success_task
                            @delete_curent_task = delete_curent_task
                            @open_refactor_task = refactor_task
                            ></new-task>
                    
                    </tr>
     
       
 
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  </div>

</section>

</template>


<script>

import NewTask from '../components/NewTask.vue'
import ModalWindowRefactor from "../components/ModalWindowRefactor.vue"
export default{
    data(){
        return{
            is_open_modal_window_for_ref_task : false,
            is_task_exist : false,
            counter_of_tasks : 0,
            tasks : [],

            name_of_new_task : '',
            refactoring_task : '',

            
        }},
    components : { NewTask, ModalWindowRefactor},
    methods : {
        add_new_task(curent_task){
            if (!this.name_of_new_task){
                return
            }

            let new_task =  {
                number : this.increment_counter_tasks(),
                new_task : curent_task,
                is_done : false
              };
     
              if ((this.tasks.filter(t => t.new_task === this.name_of_new_task)).length != 0){
                  this.decrement_counter_of_tasks();
                  this.is_task_exist = true
                  return 
              }
            
                this.tasks.push(new_task);

                this.name_of_new_task = "";
                this.is_task_exist = false
           
                localStorage.setItem('tasks', JSON.stringify(this.tasks))

        },
        mark_success_task(name_task){
            



            this.tasks.filter(t => t.new_task === name_task).forEach(t => t.is_done = true)

            
            localStorage.setItem('tasks', JSON.stringify(this.tasks))

        },
        delete_curent_task(name_task){
 
                        
            let index_of_delete = this.tasks.filter(t => t.new_task === name_task)[0].number
            this.tasks.forEach(t => t.number >= index_of_delete ? t.number = t.number -1 : {} )
            this.tasks = this.tasks.filter(t => t.new_task != name_task)

            this.decrement_counter_of_tasks()
            localStorage.setItem('tasks',JSON.stringify(this.tasks))

 
        },
        increment_counter_tasks(){
            this.counter_of_tasks = this.counter_of_tasks + 1
            return this.counter_of_tasks 
        },
        decrement_counter_of_tasks(){
            this.counter_of_tasks = this.counter_of_tasks -1 
            return  this.counter_of_tasks
        },
         refactor_task(name_task){
    
            this.is_open_modal_window_for_ref_task = true;
            this.refactoring_task = name_task
            console.log(this.refactoring_task)
            
        },
        close_modal_window_refactor(){
          this.is_open_modal_window_for_ref_task = false;
         
        },
        change_task(new_task_for_change){
          console.log(new_task_for_change)
          console.log((this.tasks.filter(t => t.new_task === this.name_of_new_task)))

          
          console.log((this.tasks.filter(t => t.new_task === new_task_for_change)).length != 0)
          if ((this.tasks.filter(t => t.new_task === new_task_for_change)).length != 0){
      
                this.close_modal_window_refactor()
                return 
              }

          localStorage.setItem('tasks', JSON.stringify(this.tasks))
          this.tasks.filter(t => t.new_task === this.refactoring_task)[0].new_task = new_task_for_change
          this.is_open_modal_window_for_ref_task = false;


  
        },
        func_is_task_exist(){
          console.log(this.tasks.filter(t => t.new_task === this.name_of_new_task))
          if (this.tasks.filter(t => t.new_task === this.name_of_new_task).length != []){
            console.log("fdasfdasdfasdf")
            return true

          }
          return false
        }
      },


    created(){
      
     
      this.tasks = JSON.parse(localStorage.getItem('tasks')) ?? []
      try{
        this.counter_of_tasks =JSON.parse(localStorage.getItem('tasks'))[this.tasks.length - 1].number 
      }
      catch{
        this.counter_of_tasks = 0
      }
      

    },
    computed(){
      // this.func_is_task_exist

    }


    }


</script>


<style>

</style>