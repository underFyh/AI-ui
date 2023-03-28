<template>
    <div>
        <Ai-Button>default</Ai-Button>
        <Ai-Button type="primary">primary</Ai-Button>
        <Ai-Button type="success" icon="ai-icon-xiangzuo">success</Ai-Button>
        <Ai-Button type="info">info</Ai-Button>
        <Ai-Button type="warning">warning</Ai-Button>
        <Ai-Button type="danger">danger</Ai-Button>
        <Ai-Button-Group>
            <Ai-Button icon="ai-icon-xiangzuo">上一页</Ai-Button>
            <Ai-Button >
                下一页
                <i class="ai-icon-xiangyou"></i>
            </Ai-Button>
        </Ai-Button-Group>
        <hr/>
        <Ai-Row :gutter="10" justif="center">
            <Ai-Col :span="6" :offset="6">
                <div style="background-color: sandybrown">2</div>
            </Ai-Col>
            <Ai-Col :span="6">
                <div style="background-color: skyblue">3</div>
            </Ai-Col>
        </Ai-Row>
        <hr/>
        <Ai-Checkbox v-model="checkValue" @change="handleChangeEvent">{{ checkValue }}</Ai-Checkbox>
        <Ai-Checkbox-Group></Ai-Checkbox-Group>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

const useButton = () => {
    const loading = ref(true);
    let handleOutClick = (v)=>{
        console.log('out-click', v);
    }

    setTimeout(() => {
        loading.value = false
    }, 3000);

    return {
        handleOutClick,
        loading
    }
}
const useCheckbox = () => {
    let checkValue = ref(true);
    let handleChangeEvent = (val) => {
        console.log('监听值:' + val);
    }
    return {
        checkValue,
        handleChangeEvent
    }
}
export default defineComponent({
    name: 'App',
    setup() {
        return {
            ...useButton(),
            ...useCheckbox()
        }
    }
})
</script>
