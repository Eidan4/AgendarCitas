<template>
    <div>
        Cuenta
        <div v-for="paciente in pacientes" :key="paciente.idPacientes">
            <div> {{paciente.pa_nombre}} {{paciente.pa_apellido}} </div>
            <div> {{paciente.pa_correo}} </div>
        </div>

    </div>
</template>