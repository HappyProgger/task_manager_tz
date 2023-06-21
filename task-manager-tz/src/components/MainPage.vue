<template>
  <div>
      <p>Добро пожаловать на страницу своего Task Manager</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  text-align: center;
  margin: 10;
  font-family: Verdana, Arial, sans-serif;
  font-size: 16px;
}
/* Настраиваем внешний вид поля ввода*/
input {
  display: inline-block;
  margin: 20px auto;
  border: 2px solid #eee;
  padding: 10px 20px;
  font-family: Verdana, Arial, sans-serif;
  font-size: 16px;
}
/*Как будет выглядеть каждый элемент нашего списка*/
.tdItem {
  text-align: left;
  padding: 10px;
  cursor: default;
  border-radius: 7px;
}
/*Что произойдёт, когда мы наведём курсор на любую задачу из списка*/
.tdItem:hover {
  background-color: lightblue;
}
</style>
