define(["jquery"], function ($) {
  $.noConflict();

  delete $.fn.html;
  delete $.fn.add;
  delete $.fn.append;
  delete $.fn.after;
  delete $.fn.before;
  delete $.fn.html;
  delete $.fn.prepend;
  delete $.fn.replaceWith;
  delete $.fn.wrap;
  delete $.fn.wrapAll;

  return $;
});
