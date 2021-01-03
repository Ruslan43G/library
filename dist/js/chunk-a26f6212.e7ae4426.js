(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-a26f6212'], {
  '447c': function (t, e, o) {
    o.r(e); o('c975'); const i = o('7a23'); const n = Object(i.F)('data-v-4e8bad0a'); Object(i.s)('data-v-4e8bad0a'); const a = { class: 'row' }; const c = Object(i.g)('h3', { class: 'title flow-text' }, 'Редактировать книгу', -1); const s = Object(i.g)('p', { class: 'subtitle flow-text' }, ' Здесь вы можете ознакомится с содержимым вашей книги и отредактировать её ', -1); const r = { class: 'row' }; const d = { class: 'input-field col s6' }; const u = Object(i.g)('label', { for: 'book_title', class: 'active' }, 'Название книги', -1); const b = { class: 'input-field col s6' }; const l = Object(i.g)('label', { for: 'book_author', class: 'active' }, 'Автор', -1); const f = Object(i.g)('p', { class: 'text flow-text' }, 'Вы можете изменить жанры вашей книги', -1); const p = { class: 'chips col s12', ref: 'chips' }; const h = Object(i.g)('button', { type: 'submit', class: 'btn waves-effect waves-light' }, 'Обновить', -1); const O = { class: 'pagination' }; Object(i.q)(); const k = n(((t, e, o, k, j, g) => {
      const v = Object(i.w)('router-link'); return Object(i.p)(), Object(i.d)(i.a, null, [Object(i.g)('div', a, [c, s, Object(i.g)('form', { class: 'col s12', onSubmit: e[4] || (e[4] = Object(i.E)((function () { return g.updateBook && g.updateBook.apply(g, arguments); }), ['prevent'])) }, [Object(i.g)('div', r, [Object(i.g)('div', d, [Object(i.D)(Object(i.g)('input', {
        'onUpdate:modelValue': e[1] || (e[1] = function (t) { return j.book.title = t; }), id: 'book_title', type: 'text', class: 'validate', required: '',
      }, null, 512), [[i.B, j.book.title]]), u]), Object(i.g)('div', b, [Object(i.D)(Object(i.g)('input', {
        'onUpdate:modelValue': e[2] || (e[2] = function (t) { return j.book.author = t; }), id: 'book_author', type: 'text', class: 'validate', required: '',
      }, null, 512), [[i.B, j.book.author]]), l])]), f, Object(i.g)('div', p, null, 512), h, Object(i.g)('button', { type: 'button', class: 'btn waves-effect waves-light red darken-4', onClick: e[3] || (e[3] = function () { return g.bookDelete && g.bookDelete.apply(g, arguments); }) }, 'Удалить')], 32)]), Object(i.g)('ul', O, [(Object(i.p)(!0), Object(i.d)(i.a, null, Object(i.v)(t.getSortedBooks, ((e) => (Object(i.p)(), Object(i.d)('li', { class: { active: e.id === j.book.id }, key: e.id }, [Object(i.g)(v, { to: { name: 'editBook', params: { id: e.id } } }, { default: n((() => [Object(i.f)(Object(i.y)(t.getSortedBooks.indexOf(e) + 1), 1)])), _: 2 }, 1032, ['to'])], 2)))), 128))])], 64);
    })); const j = (o('a630'), o('d81d'), o('45fc'), o('3ca3'), o('5530')); const g = o('4d5c'); const v = o.n(g); const m = o('5502'); const B = {
      name: 'editBook',
      data() {
        return {
          book: {
            id: +this.$route.params.id, title: '', author: '', genres: [],
          },
        };
      },
      mounted() { this.refresh(); },
      methods: Object(j.a)(Object(j.a)({}, Object(m.b)(['editBook', 'deleteBook'])), {}, {
        updateBook() { this.editBook(this.book); },
        bookDelete() { this.$router.push({ name: 'booksList' }), this.deleteBook(this.book.id); },
        refresh() {
          const t = this; if (this.getSortedBooks.some(((e) => e.id === +t.$route.params.id))) {
            const e = v.a.Chips; const o = Array.from(this.genres); e.init(this.$refs.chips, {
              placeholder: 'Введите жанры', secondaryPlaceholder: 'Введите жанры', data: o, onChipAdd(e) { const o = e[0].M_Chips.chipsData.map(((t) => t.tag)); t.book.genres = o; }, onChipDelete(e) { const o = e[0].M_Chips.chipsData.map(((t) => t.tag)); t.book.genres = o; },
            }), this.book = Object(j.a)({}, this.bookFound);
          }
        },
      }),
      computed: Object(j.a)(Object(j.a)({}, Object(m.c)(['findBookById', 'getBookGenres', 'getSortedBooks'])), {}, { bookFound() { return this.findBookById(+this.$route.params.id); }, genres() { return this.getBookGenres(this.book.id); } }),
      watch: { $route() { this.refresh(); } },
    }; o('7105'); B.render = k, B.__scopeId = 'data-v-4e8bad0a'; e.default = B;
  },
  '45fc': function (t, e, o) {
    const i = o('23e7'); const n = o('b727').some; const a = o('a640'); const c = o('ae40'); const s = a('some'); const r = c('some'); i({ target: 'Array', proto: !0, forced: !s || !r }, { some(t) { return n(this, t, arguments.length > 1 ? arguments[1] : void 0); } });
  },
  7105(t, e, o) {
    o('b786');
  },
  b786(t, e, o) {},
  c975(t, e, o) {
    const i = o('23e7'); const n = o('4d64').indexOf; const a = o('a640'); const c = o('ae40'); const s = [].indexOf; const r = !!s && 1 / [1].indexOf(1, -0) < 0; const d = a('indexOf'); const u = c('indexOf', { ACCESSORS: !0, 1: 0 }); i({ target: 'Array', proto: !0, forced: r || !d || !u }, { indexOf(t) { return r ? s.apply(this, arguments) || 0 : n(this, t, arguments.length > 1 ? arguments[1] : void 0); } });
  },
}]);
// # sourceMappingURL=chunk-a26f6212.e7ae4426.js.map
