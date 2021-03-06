class SpellChecker {

  ready() {
    this.toWrap = TextEditor.create.bind(TextEditor) // Maintain 'this' transparent
    TextEditor.create = SpellChecker.create
  }

  static async create(options, content) {
    options.browser_spellcheck = true;
    return SpellCheckerSingleton.toWrap(options, content);
  }

}

SpellCheckerSingleton = new SpellChecker();
Hooks.on('ready', SpellCheckerSingleton.ready.bind(SpellCheckerSingleton));
