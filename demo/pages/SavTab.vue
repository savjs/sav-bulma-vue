<template>
          <div>
            <SavTab :tabs="tabs" v-model="tab">
              <ul slot="label1">
                选项1
              </ul>
              <ul class="group-col" slot="label2">
                <li class="group-item" v-for="i in 5">list-item-{{i}}</li>
              </ul>
              <div slot="label3">内容区3</div>
              <div slot="label4">内容区4</div>
            </SavTab>
          </div>
        </template>
        <script type="text/javascript">
          export default {
            data: function () {
              return {
                tabs: [
                  { title:'标签1', value: "label1"},
                  { title:'标签2', value: "label2"},
                  { title:'标签3', value: "label3"},
                  { title:'标签4', value: "label4"},
                ],
                tab: 'label1'
              };
            }
          }
        </script>