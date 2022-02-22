// @ is an alias to /src
import Sidebar from "@/components/Sidebar/Sidebar.vue";

export default {
  name: "Dashboard",
  components: { Sidebar },
  data() {
    return {
      searchQuery: null,
      employees: [
        {
          id: 1,
          name: "Damien Thomas",
          description: "I am a boy, i am American, i love fries",
        },
        {
          id: 2,
          name: "Luke Sesay",
          description: "I am a boy, i am Sierra Leonean, i love cassavass",
        },
        {
          id: 3,
          name: "Joe Biles",
          description: "I am a boy, i am Ivorian, i love jollof",
        },
        {
          id: 4,
          name: "Mary Kamara",
          description: "I am a girl, i am Liberian, i love potatoes",
        },
        {
          id: 5,
          name: "Musu Conteh",
          description: "I am a girl, i am Guinean, i love cous-cous",
        },
      ],
    };
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.employees.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) =>
              `${item.name} ${item.description}`.toLowerCase().includes(v)
            );
        });
        // const lowerSearch = this.searchQuery.toLowerCase();
        // // const keywords = lowerSearch.split(" ");
        // // let match = true;
        // // for (let word of keywords) {
        // //   if (!item.name.toLowerCase().includes(word)) {
        // //     console.log(item.name.toLowerCase(), word);
        // //     match = false;
        // //   }
        // // }
        // // return match;
        // return `${item.name} ${item.description}`
        //   .toLowerCase()
        //   .includes(lowerSearch);
      } else {
        return this.employees;
      }
    },
  },
};
