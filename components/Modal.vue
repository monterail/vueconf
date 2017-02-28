<template lang="pug">
  transition(name="modal")
    .modal-mask
      .modal-wrapper(@click.self="$emit('close')")
        .modal-container

          .modal-header
            slot(name="header")
          .modal-body
            slot(name="body")

          .modal-footer
            slot(name="footer")
              button.button-secondary(@click="$emit('close')")
                | Close
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.modal-mask
  position: fixed
  z-index: 9998
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: rgba(#fff, 0.5)
  display: table
  transition: opacity .3s ease

.modal-wrapper
  display: table-cell
  vertical-align: middle

.modal-container
  max-width: 650px
  position: relative
  width: 100%
  max-height: 80vh
  overflow: auto
  box-sizing: border-box
  margin: 0px auto
  padding: 20px
  background-color: #fff
  border-radius: 5px
  box-shadow: 0 18px 35px rgba(50,50,93,.1), 0 8px 15px rgba(0,0,0,.07)
  transition: all .3s ease

.modal-footer
  text-align: right

.modal-header h3
  margin-top: 0
  color: #42b983

.modal-enter
  opacity: 0

.modal-leave-active
  opacity: 0

.modal-enter .modal-container,
.modal-leave-active .modal-container
  -webkit-transform: scale(1.1)
  transform: scale(1.1)
</style>
