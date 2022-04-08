<template>
  <input
    class="border shadow"
    id="email"
    type="email"
    placeholder="Ingresa el mail"
  />
  <input
    class="border shadow"
    id="text"
    type="password"
    placeholder="Ingresa la contraseña"
  />
  <button @click="registrar()">Send</button>
</template>
<script>
export default {};
</script>
