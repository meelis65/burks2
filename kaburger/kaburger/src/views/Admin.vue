<template>

<div>
<a href="/updateBurger">Uuenda burgereid</a>
</div>
    <div class="d-flex justify-content-center">
        <div class="col-6">
           
            <label class="input-label">Burgeri nimi</label>
                <input class="form-control">
        </div>
    </div>
    <div class="d-flex justify-content-center">
        <div class="col-6">
            <label class="input-label">Kategooria</label>
                <input class="form-control">
        </div>
    </div>
    <div class="d-flex justify-content-center">
        <div class="col-6">
            <label class="input-label">Hind</label>
                <input class="form-control">
        </div>
    </div>
    <div class="d-flex justify-content-center">
        <div class="col-6">
            <label class="input-label">Laoseis</label>
                <input class="form-control">
        </div>
    </div>
    <div class="d-flex justify-content-center">
        <div class="col-6">
            <label class="input-label">Pilt</label>
                <input type="file" @change="onFileSelected"> 
            <button @click="onUpload"> Lae üles</button>
             
        </div>
    </div>
    <div class="d-flex justify-content-center">
        <div class="col-6">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                        Featured
                    </label>
            </div>
        </div>
    </div>
    <div class="d-flex justify-content-center">
        <div class="col-6">
            <button type="submit" class="btn btn-primary">Lisa</button>
        </div>
    </div>
</template>

<style scoped>

.centered-input input {
  text-align: center
}
</style>

<script>

</script>
