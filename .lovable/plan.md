

## Reemplazar el texto de "Sobre Mi"

El texto actual tiene 5 parrafos (`about.p1` a `about.p5`), pero el nuevo texto tiene 10 parrafos. Se crearan las claves adicionales necesarias y se actualizara el componente para renderizarlos todos.

### Cambios

**1. `src/contexts/LanguageContext.tsx`** - Actualizar traducciones ES de `about.p1` a `about.p5` y agregar `about.p6` a `about.p10`:

| Clave | Texto en espanol |
|-------|-----------------|
| about.p1 | Mi nombre es Ivana, vengo de la Patagonia Argentina. |
| about.p2 | Soy una persona agradecida y afortunada. |
| about.p3 | Vivo en el bellisimo Engelberg. |
| about.p4 | Como amante de la naturaleza me gusta pasar mucho tiempo al aire libre. Soy una trail runner y trekker en mi corazon. |
| about.p5 | De profesion farmaceutica, trabaje en el sector de la salud durante muchos anos. En la actualidad, mi vocacion y dedicacion plena se centra en la ensenanza del yoga. |
| about.p6 | Mi primer contacto con el yoga fue hace mas de veinte anos en un workshop que Indra Devi dio en Buenos Aires. Con ella aprendi distintas tecnicas de respiracion que todavia uso hoy en dia. |
| about.p7 | En 2013 participe por primera vez en el Festival Internacional de Yoga en Rishikesh, India. Alli conoci a muchos maestros y yoguis que me inspiraron a practicar distintos tipos de yoga. Un ano mas tarde asisti a diferentes workshops de Gurmukh Kaur Khalsa. Con ella aprendi a movilizar mis energias y a percibir y observar conscientemente mis emociones. |
| about.p8 | En la primavera de 2015 volvi a Rishikesh y complete una formacion YTT 200 en Hatha Yoga con Surinder Singh de Swasti Yoga. |
| about.p9 | La conexion en el ahora entre el cuerpo y la mente, sincronizados con la respiracion, me ha fascinado durante muchos anos. Para profundizar en mi conocimiento y practica, complete la formacion de cuatro anos para convertirme en profesora diplomada de yoga en la Universidad de Yoga de Villeret, Suiza. |
| about.p10 | El camino de aprender y mejorar nunca termina. |

Las traducciones en aleman se redistribuiran entre las nuevas claves para mantener la correspondencia tematica. Los parrafos que no tienen equivalente en aleman se dejaran con cadena vacia.

**2. `src/components/AboutSection.tsx`** - Agregar los parrafos `about.p6` a `about.p10` con el mismo estilo que los existentes (`font-body text-sm text-foreground/75 leading-relaxed text-justify mb-3`).

No se modificaran estilos, tamanos, tipografias, margenes ni estructura del layout.
