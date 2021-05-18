<template>
  <div class="text-center section">
    <v-calendar
      class="custom-calendar max-w-full"
      :masks="masks"
      :attributes="concerts"
      disable-page-swipe
      is-expanded
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="flex flex-col h-full z-10 overflow-hidden">
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
          <div class="flex-grow overflow-y-auto overflow-x-auto">
            <p
              :class="attr.customData.place"
              class="vc-day-info tooltip"
              v-for="attr in attributes"
              :key="attr.key"
            >
              {{ attr.customData.title }}
              <TooltipComponent :text="attr.customData.title" />
            </p>
          </div>
        </div>
      </template>
    </v-calendar>
  </div>
</template>

<script>
import tooltipComponent from "./tooltipComponent.vue";
export default {
  components: { tooltipComponent },
  props: ["concerts"],
  data() {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    return {
      masks: {
        weekdays: "WWW"
      },
      attributes: [
        {
          id: 1,
          customData: {
            title: "O2 Academy Manchester"
          },
          dates: "2021-12-09T23:00:00.000Z",
          artistId: 2
        },
        {
          key: 1,
          customData: {
            title: "Lunch with mom.",
            class: "bg-red-600 text-white"
          },
          dates: new Date(year, month, 1)
        },
        {
          key: 2,
          customData: {
            title: "Paris Bercy",
            class: "bg-blue-500 text-white"
          },
          dates: new Date(year, month, 2)
        },
        {
          key: 3,
          customData: {
            title: "Noah's basketball game.",
            class: "bg-blue-500 text-white"
          },
          dates: new Date(year, month, 5)
        },
        {
          key: 4,
          customData: {
            title: "Take car to the shop",
            class: "bg-indigo-500 text-white"
          },
          dates: new Date(year, month, 5)
        },
        {
          key: 4,
          customData: {
            title: "Meeting with new client.",
            class: "bg-teal-500 text-white"
          },
          dates: new Date(year, month, 7)
        },
        {
          key: 5,
          customData: {
            title: "Mia's gymnastics practice.",
            class: "bg-pink-500 text-white"
          },
          dates: new Date(year, month, 11)
        },
        {
          key: 6,
          customData: {
            title: "Cookout with friends.",
            class: "bg-orange-500 text-white"
          },
          dates: { months: 5, ordinalWeekdays: { 2: 1 } }
        },
        {
          key: 7,
          customData: {
            title: "Mia's gymnastics recital.",
            class: "bg-pink-500 text-white"
          },
          dates: new Date(year, month, 22)
        },
        {
          key: 8,
          customData: {
            title: "Visit great grandma.",
            class: "bg-red-600 text-white"
          },
          dates: new Date(year, month, 25)
        }
      ]
    };
  }
};
</script>
