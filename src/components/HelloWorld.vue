<template lang="pug">
  .gartic
    h1 GARTIC FAMÍLIA
    p Escolha os temas da jogada !!!
    .box-check(@click="themesListWord")
      .input-check(v-for="(list, theme) in allThemese")
        input(type="checkbox" :id="theme" v-model="themes[theme].active")
        label(:for="theme") {{ themes[theme].trans }}
    p.tema Tema: {{ themaName }}
    p.word {{ word }}
    .dica-box(v-show="showBoxDica")
      p.dica Dica
      p.txt-dica {{ dica }}
      p.txt-dica-qtd {{ qtdDica }} letras

    h2.btn-sortear(@click="sortear") SORTEAR
</template>

<script>
import { allThemes } from '@/components/wordList/wordList.js'
export default {
  data () {
    return {
      waitTime: 60000,
      word: 'Sorteie uma palavra!!!',
      qtdDica: 0,
      lettersToShow: ['-', ' '],
      fullListWords: [],
      dica: '',
      themaName: '',
      allThemese: [],
      themes: {
        objects: {
          active: 1,
          trans: 'Objetos'
        },
        foods: {
          active: 1,
          trans: 'Comidas'
        },
        animals: {
          active: 1,
          trans: 'Animais'
        }
      },
      showBoxDica: false,
      acentos: [
        ['a', 'à', 'á', 'â', 'ã', 'ä'],
        ['e', 'è', 'é', 'ê', 'ẽ', 'ë'],
        ['i', 'ì', 'í', 'î', 'ĩ', 'ï'],
        ['o', 'ò', 'ó', 'ô', 'õ', 'ö'],
        ['u', 'ù', 'ú', 'û', 'ũ', 'ü'],
        ['c', 'ç']
      ],
      timeOuts: []
    }
  },
  created () {
    this.allThemese = allThemes
    this.mountListWords()
  },
  methods: {
    themesListWord () {
      setTimeout(() => {
        this.mountListWords()
      }, 1000)
    },
    mountListWords () {
      console.log('asdfads')
      this.fullListWords = []
      let theme = ''
      for (theme in this.themes) {
        this.fullListWords = (this.themes[theme].active ? this.fullListWords.concat(allThemes[theme]) : this.fullListWords)
      }
    },
    sortear () {
      // this.mountListWords()
      this.lettersToShow = ['-', ' ']
      this.showBoxDica = false
      for (let i = 0; i < this.timeOuts.length; i++) {
        clearTimeout(this.timeOuts[i])
      }
      console.log(this.fullListWords.length)
      if (this.fullListWords.length > 0) {
        const indexWord = Math.floor((Math.random() * this.fullListWords.length))
        if (indexWord < this.fullListWords.length - 1) {
          this.word = this.fullListWords[indexWord]
          const head = (this.fullListWords).slice(0, indexWord)
          const tail = (this.fullListWords).slice(indexWord + 1, this.fullListWords.length)
          this.fullListWords = head.concat(tail)
        } else {
          this.word = this.fullListWords.pop()
        }

        // Pegando tema da palavra.
        let theme = ''
        this.themaName = ''
        for (theme in this.themes) {
          console.log(this.themaName)
          this.themaName += (allThemes[theme].includes(this.word)) ? (this.themes[theme].trans) + ' - ' : ''
        }
        console.log(this.themaName)
        this.timeOuts.push(
          setTimeout(() => {
            this.showdica(this.word)
          }, this.waitTime)
        )
      } else {
        this.word = 'Lista de palavras vazia :('
      }
    },
    showdica (word) {
      this.showBoxDica = true
      this.qtdDica = this.word.replace(/[- ]/g, '').length
      this.dica = word.replace(/[^- ]/g, '_')
      this.timeOuts.push(
        setTimeout(() => {
          window.scroll({
            top: 500,
            left: 0,
            behavior: 'smooth'
          })
        }, 1000)
      )
      this.timeOuts.push(
        setTimeout(() => {
          this.addLetter()
        }, this.waitTime / 4)
      )
    },
    addLetter () {
      let indexLetter = 0
      if (this.dica.includes('_')) {
        const adica = this.dica.split('')
        const aword = this.word.split('')
        console.log('entrou add')
        const arrayIndexes = []

        adica.forEach((p, i) => {
          if (p === '_') {
            arrayIndexes.push(i)
          }
        })

        indexLetter = arrayIndexes[Math.floor(Math.random() * arrayIndexes.length)]
        console.log(indexLetter, arrayIndexes)
        this.lettersToShow.push(aword[indexLetter].toLowerCase())
        this.acentos.forEach(ac => {
          if (ac.includes(aword[indexLetter].toLowerCase())) {
            this.lettersToShow = (this.lettersToShow).concat(ac)
          }
        })
        for (let i = 0; i < this.word.length; i++) {
          if (this.lettersToShow.includes(aword[i].toLowerCase())) {
            adica[i] = aword[i]
          }
        }
        this.dica = adica.join('')
        this.timeOuts.push(
          setTimeout(() => {
            this.addLetter()
          }, this.waitTime / 4)
        )
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  color: rgb(151, 103, 196);
  font-style: italic;
}
.input-check {
  margin-bottom: 6px;
  margin-right: 5px;
  display: inline-block;
}
.dica {
  align-self: left;
  font-size: 32px;
  color: rgb(139, 88, 155);
  margin-bottom: 0;
}
.tema {
  font-size: 22px;
  color: #666;
}
.word {
  font-size: 40px;
  color: rgb(151, 103, 196);
}
.btn-sortear {
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid blueviolet;
  margin: auto;
  width: 150px;
  color: darkslateblue;
  box-shadow: 2px 2px 9px 1px rgb(151, 103, 196);
}
.dica-box {
  border: 2px solid #555;
  max-width: 500px;
  margin: auto;
  border-radius: 8px;
  margin-bottom: 25px;
}
.txt-dica,
.txt-dica-qtd {
  font-size: 35px;
  color: #777;
  letter-spacing: 12px;
}
</style>
