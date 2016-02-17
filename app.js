
var app = new Vue({
	el: '#app',
	data: {
		domains: domains,
		searchText: ''
	},
	computed: {
		searchResults: function () {
			return this.$options.filters.filterBy(this.domains, this.searchText);
		}
	}
});
