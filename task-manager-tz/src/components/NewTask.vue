<template>

                
        <th scope="row">{{ task.number }}</th>
        
        <td>{{ task.new_task }}</td>
        <td>{{ task.is_done ? "is done" : "in working" }}</td>
        <td>

        <button type="submit"  
        @click="$emit('open_refactor_task', task.new_task)"
        class="btn btn-warning">Refactor</button>

            
        <button type="submit"  
        @click="$emit('delete_curent_task', task.new_task)"
         class="btn btn-danger">Delete</button>

        <button type="submit" 
        @click=task_is_done   
        :class="{ disabled : task.is_done}" 
        class="btn btn-success ms-1">Finished</button>

        </td>
   
 
</template>
<script>

    export default{
        data(){
            return{

            }
        },
        props : {
            task : {
                type : Object,
            }
        },
        methods : {
            task_is_done(){
                this.$emit('task_is_done',this.task.new_task);
                
            }
        }  ,
          computed(){
            console.log(this.task)
        }
    }
</script>