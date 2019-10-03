# frozen_string_literal: true.
module CustomHelpers
  def home_link
    link_to 'Home', config[:host]
  end
end
