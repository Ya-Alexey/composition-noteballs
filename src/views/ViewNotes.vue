<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Add a new note"></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success">
            Add New Note
          </button>
        </div>
      </div>
    </div>



    <div class="card mb-4" v-for="i in 3">
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam praesentium officiis optio dignissimos porro, maiores corporis voluptatibus repellendus asperiores consequatur aperiam exercitationem nobis sapiente perferendis sunt sit, enim sed vitae?
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "ViewNotes",
}
</script>
<style lang="">
  
</style>