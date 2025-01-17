module Organisations
  class CoursePolicy < ApplicationPolicy
    def active_cohorts?
      return true if user.school_admin.present?

      organisation_ids = user.organisations.pluck(:id)

      return false if organisation_ids.blank?

      record
        .founders
        .joins(:user)
        .exists?(users: { organisation_id: organisation_ids })
    end

    alias ended_cohorts? active_cohorts?
  end
end
