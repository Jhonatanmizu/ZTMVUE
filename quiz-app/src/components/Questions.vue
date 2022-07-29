<template>
    <div class="questions-ctr">
        <div class="progress">
            <div class="bar" :style="{ width: `${questionsAnseweerd / questions.length * 100}%` }"></div>
            <div class="status">{{ questionsAnsweered }} out of {{ questions.length }} questions answered</div>
        </div>
        <div class="single-question" v-for=" (question, qi ) in questions" :key="question.q"
            v-show="questionsAnsweered === qi">
            <div class="question">{{ question.q }}</div>
            <div class="answers">
                <div class="answer" v-for="answer in question.answers" :key="answer.text"
                    @click.prevent="selectAnsweer(answer.is_correct)">{{ answer.text }}</div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Questions",
    props: ["questions", "questionsAnsweered"],
    emits: ["question-answeerd"],
    methods: {
        selectAnsweer(answeer) {
            console.log("SELECIONADA");
            if (answeer) {
                this.$emit('question-answeered', answeer)
            }
        }
    },
}
</script>