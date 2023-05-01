<template>
    <div>
        <section class="section container">
            <div class="columns">
                <div class="column is-three-quarters">
                    <input class="input" type="text" placeholder="Title">
                </div>
            </div>
            <div class="columns">
                <div class="column is-three-quarters">
                    <div class="form-group">
                        <div class="control">
                            <textarea class="textarea form-control" rows="10" placeholder="Leave a comment"></textarea>
                        </div>
                        <div class="file has-name border-dashed pt-3">
                            <label class="custom-file">
                                <input type="file" class="custom-file-input" placeholder="Attach files by dragging & dropping">
                                <span class="custom-file-control"></span>
                            </label>
                            <!--<input type="file" class="form-control-file" id="exampleFormControlFile1">-->
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div>
                        <h6 class="subtitle is-6" for="assignees">Assignees</h6>
                        <p class="subtitle is-6">No one assigned</p>
                        <hr/>
                    </div>
                    <div>
                        <h6 class="subtitle is-6" for="label">Label</h6>
                        <p class="subtitle is-6">None yet</p>
                        <hr/>
                    </div>
                    <div>
                        <h6 class="subtitle is-6" for="projects">Projects</h6>
                        <p class="subtitle is-6">None yet</p>
                        <hr/>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column is-three-quarters">
                    <div class="is-pulled-right">
                        <button class="button is-small is-success">Submit new issue</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
}
</script>

<style scoped>
.border-dashed {
    border-top: 1px dashed;
    border-bottom: 1px solid;
    border-left: 1px solid;
    border-right: 1px solid;
}
.custom-file {
  position: relative;
  display: inline-block;
  width: 100%;
}
.custom-file-control {
  position: relative;
  background-color: #fff;
  border-radius: 0.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.subtitle:not(:last-child){
    margin-bottom: 5px;
}
hr {
    margin: 1rem 0;
}
</style>
